using ECommerceApp.Application.DTOs;
using ECommerceApp.Application.DTOs.Category;
using ECommerceApp.Application.DTOs.Product;
using ECommerceApp.Domain.Entities;

namespace ECommerceApp.Application.Services.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<GetCategory>> GetAllAsync();
    Task<GetCategory> GetByIdAsync(Guid id);
    Task<ServiceResponse> AddAsync(CreateCategory entity);
    Task<ServiceResponse> UpdateAsync(UpdateCategory entity);
    Task<ServiceResponse> DeleteAsync(Guid id);
    
    Task<IEnumerable<GetProduct>> GetProductsByCategory(Guid categoryId);
}