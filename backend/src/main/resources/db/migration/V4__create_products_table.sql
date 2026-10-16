CREATE TABLE products (
                          id BIGSERIAL PRIMARY KEY,
                          name VARCHAR(200) NOT NULL,
                          description TEXT,
                          price NUMERIC(12, 2) NOT NULL,
                          stock_quantity INTEGER NOT NULL DEFAULT 0,
                          category_id BIGINT NOT NULL,
                          created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

                          CONSTRAINT fk_products_category
                              FOREIGN KEY (category_id)
                                  REFERENCES categories(id),

                          CONSTRAINT chk_products_price
                              CHECK (price >= 0),

                          CONSTRAINT chk_products_stock
                              CHECK (stock_quantity >= 0)
);