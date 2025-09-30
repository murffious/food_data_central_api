/*
  # Create Nutrition Database Schema

  1. New Tables
    - `foods`
      - `id` (uuid, primary key)
      - `fdc_id` (text, unique) - FoodData Central ID
      - `name` (text) - Food name
      - `description` (text) - Detailed description
      - `food_group` (text) - Category (Fruit, Vegetable, Legume, etc.)
      - `data_type` (text) - FDC data type (Foundation, SR Legacy, etc.)
      - `publication_date` (date) - When the data was published
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `food_nutrients`
      - `id` (uuid, primary key)
      - `food_id` (uuid, foreign key to foods)
      - `nutrient_id` (integer) - FDC nutrient ID
      - `nutrient_name` (text) - Name of the nutrient
      - `nutrient_number` (text) - Nutrient number code
      - `unit_name` (text) - Unit of measurement (g, mg, etc.)
      - `amount` (decimal) - Amount of nutrient per 100g
      - `created_at` (timestamptz)
    
    - `food_portions`
      - `id` (uuid, primary key)
      - `food_id` (uuid, foreign key to foods)
      - `portion_description` (text) - Description of the portion
      - `gram_weight` (decimal) - Weight in grams
      - `amount` (decimal) - Portion amount
      - `modifier` (text) - Modifier like "whole", "cup", etc.
      - `created_at` (timestamptz)
    
    - `api_fetch_log`
      - `id` (uuid, primary key)
      - `food_name` (text) - Name of food searched
      - `fdc_id` (text) - FDC ID found
      - `status` (text) - success, error, not_found
      - `error_message` (text) - Error details if any
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
    - Add policies for service role to write data

  3. Indexes
    - Add indexes for frequently queried columns
    - Unique index on foods.fdc_id
*/

-- Create foods table
CREATE TABLE IF NOT EXISTS foods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fdc_id text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  food_group text,
  data_type text,
  publication_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create food_nutrients table
CREATE TABLE IF NOT EXISTS food_nutrients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  food_id uuid REFERENCES foods(id) ON DELETE CASCADE,
  nutrient_id integer NOT NULL,
  nutrient_name text NOT NULL,
  nutrient_number text,
  unit_name text,
  amount decimal,
  created_at timestamptz DEFAULT now()
);

-- Create food_portions table
CREATE TABLE IF NOT EXISTS food_portions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  food_id uuid REFERENCES foods(id) ON DELETE CASCADE,
  portion_description text,
  gram_weight decimal,
  amount decimal,
  modifier text,
  created_at timestamptz DEFAULT now()
);

-- Create api_fetch_log table
CREATE TABLE IF NOT EXISTS api_fetch_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  food_name text NOT NULL,
  fdc_id text,
  status text NOT NULL,
  error_message text,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_foods_food_group ON foods(food_group);
CREATE INDEX IF NOT EXISTS idx_foods_data_type ON foods(data_type);
CREATE INDEX IF NOT EXISTS idx_foods_name ON foods(name);
CREATE INDEX IF NOT EXISTS idx_food_nutrients_food_id ON food_nutrients(food_id);
CREATE INDEX IF NOT EXISTS idx_food_nutrients_nutrient_name ON food_nutrients(nutrient_name);
CREATE INDEX IF NOT EXISTS idx_food_portions_food_id ON food_portions(food_id);
CREATE INDEX IF NOT EXISTS idx_api_fetch_log_status ON api_fetch_log(status);

-- Enable RLS
ALTER TABLE foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_nutrients ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_portions ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_fetch_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for foods
CREATE POLICY "Anyone can read foods"
  ON foods FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can insert foods"
  ON foods FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update foods"
  ON foods FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS Policies for food_nutrients
CREATE POLICY "Anyone can read food nutrients"
  ON food_nutrients FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can insert food nutrients"
  ON food_nutrients FOR INSERT
  TO service_role
  WITH CHECK (true);

-- RLS Policies for food_portions
CREATE POLICY "Anyone can read food portions"
  ON food_portions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can insert food portions"
  ON food_portions FOR INSERT
  TO service_role
  WITH CHECK (true);

-- RLS Policies for api_fetch_log
CREATE POLICY "Service role can manage api fetch log"
  ON api_fetch_log FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);