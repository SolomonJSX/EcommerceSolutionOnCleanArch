using ECommerceApp.Domain.Entities;
using ECommerceApp.Domain.Interfaces.CategorySpecifies;
using ECommerceApp.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Infrastructure.Repositories.CategorySpecifies;

public class CategoryRepository(AppDbContext dbContext) : ICategory
{ 
    public async Task<IEnumerable<Product>> GetProductsByCategoryAsync(Guid categoryId)
    {
        var products = await dbContext.Products
            .Include(p => p.Category)
            .Where(x => x.CategoryId == categoryId)
            .AsNoTracking()
            .ToListAsync();

        return products.Count > 0 ? products : [];
    }
}