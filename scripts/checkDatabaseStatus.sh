# Load your environment variables
source ../.env

# Construct a psql command with variables
psqlCommand="psql -h localhost -p 5432 -U $DB_USER -d $DB_NAME -f ./sql/checkDatabaseStatus.sql"

# Execute the command (add password prompt if needed)
$psqlCommand
