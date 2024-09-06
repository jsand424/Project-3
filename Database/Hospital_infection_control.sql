
DROP TABLE IF EXISTS measure_scores;
DROP TABLE IF EXISTS hospitals;


CREATE TABLE hospitals (
    provider_id INT PRIMARY KEY,
    hospital_name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip_code INT,
    county_name TEXT,
    phone_number TEXT
);

SELECT *
FROM hospitals;

CREATE TABLE measure_scores (
    measure_id TEXT,
    measure_name TEXT,
    infection TEXT,
    measure_start_date DATE,
    measure_end_date DATE,
    compared_to_national TEXT,
    score FLOAT,
    provider_id INT,
    FOREIGN KEY (provider_id) REFERENCES hospitals(provider_id)
);

SELECT *
FROM measure_scores;
