/*
  # Add RLS Policies for Nutrition Database

  1. Security Changes
    - Add policies for public access to all tables
    - Allow anonymous inserts for data population
    - Allow public reads for nutrition data
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to foods" ON foods;
DROP POLICY IF EXISTS "Allow public insert to foods" ON foods;
DROP POLICY IF EXISTS "Allow public read access to food_nutrients" ON food_nutrients;
DROP POLICY IF EXISTS "Allow public insert to food_nutrients" ON food_nutrients;
DROP POLICY IF EXISTS "Allow public read access to food_portions" ON food_portions;
DROP POLICY IF EXISTS "Allow public insert to food_portions" ON food_portions;
DROP POLICY IF EXISTS "Allow public read access to api_fetch_log" ON api_fetch_log;
DROP POLICY IF EXISTS "Allow public insert to api_fetch_log" ON api_fetch_log;

-- Foods table policies
CREATE POLICY "Allow public read access to foods"
  ON foods FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to foods"
  ON foods FOR INSERT
  TO anon
  WITH CHECK (true);

-- Food nutrients policies
CREATE POLICY "Allow public read access to food_nutrients"
  ON food_nutrients FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to food_nutrients"
  ON food_nutrients FOR INSERT
  TO anon
  WITH CHECK (true);

-- Food portions policies
CREATE POLICY "Allow public read access to food_portions"
  ON food_portions FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to food_portions"
  ON food_portions FOR INSERT
  TO anon
  WITH CHECK (true);

-- API fetch log policies
CREATE POLICY "Allow public read access to api_fetch_log"
  ON api_fetch_log FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to api_fetch_log"
  ON api_fetch_log FOR INSERT
  TO anon
  WITH CHECK (true);
