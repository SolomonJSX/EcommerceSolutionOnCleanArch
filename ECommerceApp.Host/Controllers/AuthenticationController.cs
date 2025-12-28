using ECommerceApp.Application.DTOs.Identity;
using ECommerceApp.Application.Services.Interfaces.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Web;

namespace ECommerceApp.Host.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController(IAuthenticationService authenticationService) : ControllerBase
{
    [HttpPost("create")]
    public async Task<IActionResult> CreateUser(CreateUser createUser)
    {
        var result = await authenticationService.CreateUser(createUser);
        return result.Success ? Ok(result) : BadRequest(result);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> LoginUser(LoginUser loginUser)
    {
        var result = await authenticationService.LoginUser(loginUser);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    [HttpGet("refreshToken/{refreshToken}")]
    public async Task<IActionResult> RefreshToken(string refreshToken)
    {
        var result = await authenticationService.ReviveToken(HttpUtility.UrlDecode(refreshToken));
        return result.Success ? Ok(result) : BadRequest(result);
    }
}