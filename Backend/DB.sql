-- Eye-products-DB 

-- Create Database
CREATE DATABASE IF NOT EXISTS `Eye-products-DB` 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE `Eye-products-DB`;

-- =============================================
-- 1. Categories Table
-- =============================================
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- 2. Subcategories Table
-- =============================================
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100),
    description TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE KEY `unique_category_subcategory` (category_id, slug)  -- Added for safety
);

-- =============================================
-- 3. Products Table
-- =============================================
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE
);

-- =============================================
-- 4. Users Table
-- =============================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================
INSERT INTO categories (name, slug) VALUES
('Eyeglasses', 'eyeglasses'),
('Sunglasses', 'sunglasses'),
('Contact Lenses', 'contact-lenses'),
('Lens Solutions & Eye Care', 'lens-solutions-eye-care'),
('Accessories', 'accessories'),
('Eye Care Services', 'eye-care-services'),
('Brands', 'brands')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Eyeglasses
(1, 'Mens Eyeglasses', 'mens-eyeglasses', NULL),
(1, 'Womens Eyeglasses', 'womens-eyeglasses', NULL),
(1, 'Kids Eyeglasses', 'kids-eyeglasses', NULL),
(1, 'Reading Glasses', 'reading-glasses', NULL),
(1, 'Blue Light Glasses', 'blue-light-glasses', NULL),
(1, 'Computer Glasses', 'computer-glasses', NULL),
(1, 'Prescription Glasses', 'prescription-glasses', NULL),

-- Sunglasses
(2, 'Mens Sunglasses', 'mens-sunglasses', NULL),
(2, 'Womens Sunglasses', 'womens-sunglasses', NULL),
(2, 'Kids Sunglasses', 'kids-sunglasses', NULL),
(2, 'Polarized Sunglasses', 'polarized-sunglasses', NULL),
(2, 'Prescription Sunglasses', 'prescription-sunglasses', NULL),
(2, 'Sports Sunglasses', 'sports-sunglasses', NULL),

-- Contact Lenses
(3, 'Daily Contact Lenses', 'daily-contact-lenses', NULL),
(3, 'Monthly Contact Lenses', 'monthly-contact-lenses', NULL),
(3, 'Yearly Contact Lenses', 'yearly-contact-lenses', NULL),
(3, 'Colored Contact Lenses', 'colored-contact-lenses', NULL),
(3, 'Toric Contact Lenses', 'toric-contact-lenses', NULL),
(3, 'Multifocal Contact Lenses', 'multifocal-contact-lenses', NULL),

-- Lens Solutions & Eye Care
(4, 'Contact Lens Solution', 'contact-lens-solution', NULL),
(4, 'Lens Cleaner', 'lens-cleaner', NULL),
(4, 'Lens Wipes', 'lens-wipes', NULL),
(4, 'Eye Drops', 'eye-drops', NULL),
(4, 'Lens Cases', 'lens-cases', NULL),
(4, 'Cleaning Kits', 'cleaning-kits', NULL),

-- Accessories
(5, 'Eyeglass Cases', 'eyeglass-cases', NULL),
(5, 'Cleaning Cloths', 'cleaning-cloths', NULL),
(5, 'Eyeglass Chains', 'eyeglass-chains', NULL),
(5, 'Eyeglass Cords', 'eyeglass-cords', NULL),
(5, 'Repair Kits', 'repair-kits', NULL),
(5, 'Nose Pads', 'nose-pads', NULL),

-- Eye Care Services
(6, 'Eye Examination', 'eye-examination', NULL),
(6, 'Vision Test', 'vision-test', NULL),
(6, 'Contact Lens Fitting', 'contact-lens-fitting', NULL),
(6, 'Prescription Renewal', 'prescription-renewal', NULL),
(6, 'Frame Adjustment', 'frame-adjustment', NULL),
(6, 'Lens Replacement', 'lens-replacement', NULL),

-- Brands
(7, 'Premium Brands', 'premium-brands', NULL),
(7, 'Budget Brands', 'budget-brands', NULL),
(7, 'Sports Brands', 'sports-brands', NULL),
(7, 'Designer Brands', 'designer-brands', NULL)
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);