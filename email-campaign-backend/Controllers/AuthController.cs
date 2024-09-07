using Microsoft.AspNetCore.Mvc;
using EmailCampaignBackend.Services;
using EmailCampaignBackend.Models;
using System.Threading.Tasks;

namespace EmailCampaignBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel model)
        {
            if (string.IsNullOrEmpty(model.Company) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Please fill in all required fields.");
            }

            var isAuthenticated = await _userService.AuthenticateAsync(model.Company, model.Password);

            if (isAuthenticated)
            {
                return Ok("Login successful");
            }
            else
            {
                return Unauthorized("Invalid username or password.");
            }
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequestModel model)
        {
            if (string.IsNullOrEmpty(model.Email))
            {
                return BadRequest("Please enter your email address.");
            }

            var isSent = await _userService.SendPasswordResetLinkAsync(model.Email);

            if (isSent)
            {
                return Ok("Password reset link sent.");
            }
            else
            {
                return StatusCode(500, "Error sending password reset link.");
            }
        }
    }
}
