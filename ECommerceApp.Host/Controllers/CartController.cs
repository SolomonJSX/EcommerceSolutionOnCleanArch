using ECommerceApp.Application.DTOs.Cart;
using ECommerceApp.Application.Services.Interfaces.Cart;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Host.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpPost("checkout")]
    public async Task<ActionResult> Checkout(Checkout checkout)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        
        var result = await cartService.Checkout(checkout);
        
        return result.Success ? Ok(result) : BadRequest(result);
    }
    
    
}