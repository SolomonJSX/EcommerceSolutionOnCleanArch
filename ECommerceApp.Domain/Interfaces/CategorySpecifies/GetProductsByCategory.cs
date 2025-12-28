using ECommerceApp.Domain.Entities;

namespace ECommerceApp.Domain.Interfaces.CategorySpecifies;

public interface ICategory
{
    Task<IEnumerable<Product>> GetProductsByCategoryAsync(Guid categoryId);
}