curl -X POST http://0.0.0.0:9000/api/tasks \
     -H "Content-Type: application/json" \
     -d '{
          "person": "Alice",
          "task": "Write report",
          "amount": 10
        }'

