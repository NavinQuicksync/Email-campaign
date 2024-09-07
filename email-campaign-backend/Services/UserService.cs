using System.Linq;
using System.Threading.Tasks;
using EmailCampaignBackend.Data;
using EmailCampaignBackend.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace EmailCampaignBackend.Services
{
    public interface IUserService
    {
        Task<bool> AuthenticateAsync(string company, string password);
        Task<bool> SendPasswordResetLinkAsync(string email);
    }

    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AuthenticateAsync(string company, string password)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == company);

            if (user == null)
                return false;

            var isPasswordValid = VerifyPasswordHash(password, user.PasswordHash);
            return isPasswordValid;
        }

        public async Task<bool> SendPasswordResetLinkAsync(string email)
        {
            // Implement logic to send a password reset link to the email
            // This typically involves generating a token and sending an email
            return true;
        }

        private bool VerifyPasswordHash(string password, string storedHash)
        {
            // Implement password hash verification
            return true;
        }
    }
}
