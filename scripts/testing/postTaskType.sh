curl -X POST http://localhost:3000/api/taskTypes \
     -H "Content-Type: application/json" \
     -d '{
          "taskName": "Daily cleanup",
          "description": "clean up task"
        }'