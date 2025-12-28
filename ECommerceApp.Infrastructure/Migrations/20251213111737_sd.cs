using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ECommerceApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class sd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3e3f8c5-51cf-4f4d-bd87-9a01b792c7b4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f4abba44-de92-48ee-a3d3-ac892a6b5c56");

            migrationBuilder.DeleteData(
                table: "PaymentMethods",
                keyColumn: "Id",
                keyValue: new Guid("750498b5-7589-47a9-95e7-a591587e2417"));

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1b03f174-5fe7-4654-b3af-0d8ddb836728", null, "User", "USER" },
                    { "9123bfbf-ab01-45bd-9a6e-fb7b4a3d5f06", null, "Admin", "ADMIN" }
                });

            migrationBuilder.InsertData(
                table: "PaymentMethods",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("9e11645c-a48a-40d2-b0a1-eff688ec82ff"), "Credit card" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1b03f174-5fe7-4654-b3af-0d8ddb836728");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9123bfbf-ab01-45bd-9a6e-fb7b4a3d5f06");

            migrationBuilder.DeleteData(
                table: "PaymentMethods",
                keyColumn: "Id",
                keyValue: new Guid("9e11645c-a48a-40d2-b0a1-eff688ec82ff"));

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "d3e3f8c5-51cf-4f4d-bd87-9a01b792c7b4", null, "User", "USER" },
                    { "f4abba44-de92-48ee-a3d3-ac892a6b5c56", null, "Admin", "ADMIN" }
                });

            migrationBuilder.InsertData(
                table: "PaymentMethods",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("750498b5-7589-47a9-95e7-a591587e2417"), "Credit card" });
        }
    }
}
