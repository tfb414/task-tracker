curl -X POST http://localhost:3000/api/tasks \
     -H "Content-Type: application/json" \
     -d '{
          "person": "Alice",
          "task": "Write report",
          "amount": 10
        }'

