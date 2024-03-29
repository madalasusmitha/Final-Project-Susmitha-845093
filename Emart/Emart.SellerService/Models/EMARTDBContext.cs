﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.SellerService.Models
{
    public partial class EMARTDBContext : DbContext
    {
        public EMARTDBContext()
        {
        }

        public EMARTDBContext(DbContextOptions<EMARTDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-AKFN0I3\\SQLEXPRESS;Initial Catalog=EMARTDB;User ID=SA;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Createddatetime)
                    .HasColumnName("createddatetime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasColumnName("emailid")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Mobilenumber)
                    .HasColumnName("mobilenumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.Property(e => e.Cartid)
                    .HasColumnName("cartid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Buyerid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Categoryid)
                    .HasColumnName("categoryid")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Itemid)
                    .HasColumnName("itemid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .HasColumnName("itemname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerid)
                    .HasColumnName("sellerid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Stocknumber)
                    .HasColumnName("stocknumber")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Subcategoryid)
                    .HasColumnName("subcategoryid")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Buyerid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__cart__Buyerid__4D94879B");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Categoryid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__cart__categoryid__4AB81AF0");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Itemid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__cart__itemid__49C3F6B7");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Sellerid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__cart__sellerid__4CA06362");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Subcategoryid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__cart__subcategor__4BAC3F29");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasIndex(e => e.CategoryName)
                    .HasName("UQ__Category__5189E2552C69ED17")
                    .IsUnique();

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("brief_details")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .HasColumnName("category_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .HasColumnName("Discount_code")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Itemid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Percentage)
                    .HasColumnName("percentage")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.StartDate)
                    .HasColumnName("start_date")
                    .HasColumnType("datetime");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Discounts)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__Discounts__Itemi__2D27B809");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasIndex(e => e.ItemName)
                    .HasName("UQ__Items__ACA52A97BFD950AB")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Sid)
                    .HasColumnName("sid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StockNumber)
                    .HasColumnName("stock_number")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.SubcategoryId)
                    .HasColumnName("subcategory_id")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasIndex(e => e.TransactionId)
                    .HasName("UQ__Purchase__9A8C4A3C43282482")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Buyerid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime");

                entity.Property(e => e.Itemid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NumberOfItems).HasColumnName("Number_of_items");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionId)
                    .HasColumnName("Transaction_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TranscationType)
                    .IsRequired()
                    .HasColumnName("Transcation_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Buyerid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__PurchaseH__Buyer__267ABA7A");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Itemid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__PurchaseH__Itemi__286302EC");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Briefaboutcompany)
                    .IsRequired()
                    .HasColumnName("briefaboutcompany")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasColumnName("companyname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Contactnumber)
                    .HasColumnName("contactnumber")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasColumnName("emailid")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasColumnName("GSTIN")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .IsRequired()
                    .HasColumnName("postal_address")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasColumnName("website")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasIndex(e => e.SubcategoryName)
                    .HasName("UQ__SubCateg__5B73707368D42626")
                    .IsUnique();

                entity.Property(e => e.SubcategoryId)
                    .HasColumnName("subcategory_id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("brief_details")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gst).HasColumnName("GST");

                entity.Property(e => e.SubcategoryName)
                    .HasColumnName("subcategory_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
