-- Testdaten NUR für lokale Entwicklung (Profil "dev").
-- Wird bei Änderungen automatisch neu ausgeführt.
-- Beispieldaten (Produkte, Kategorien, ...) hier ergänzen,
-- sobald die Tabellen existieren (ab Sprint 3).
-- Sample categories for local testing
INSERT INTO categories (name, description) VALUES
                                               ('Electronics', 'Phones, laptops and accessories'),
                                               ('Clothing', 'Shirts, trousers and shoes'),
                                               ('Books', 'Novels, textbooks and comics'),
                                               ('Home & Kitchen', 'Furniture, cookware and decoration')
    ON CONFLICT (name) DO NOTHING;