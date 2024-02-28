#!/bin/bash

# Load environment variables (modify if your .env file has a different name)
source ../.env

# Construct query assuming an 'id' column for ordering
query="SELECT * FROM tasks ORDER BY id DESC LIMIT 10;"

# Execute query using psql
psql -h localhost -p 5432 -U $DB_USER -d $DB_NAME -c "$query"