from flask import Flask, jsonify
import mysql.connector
from datetime import timedelta

app = Flask(__name__)

# Replace these values with your actual database connection details
db_config = {
    'host': 'localhost',
    'user': 'amrita',
    'password': 'Shreyoshree&2',
    'database': 'test',
}

# Route to fetch data from the database
@app.route('/')
def fetch_data():
    try:
        # Establish a connection to the database
        connection = mysql.connector.connect(**db_config)

        # Create a cursor object to interact with the database
        cursor = connection.cursor()

        # Execute the SQL query to fetch data from employees
        cursor.execute('SELECT * FROM employees')

        # Fetch all rows from the result set
        result = cursor.fetchall()

        # Convert timedelta to string representation
        data = [
            {
                'ID': row[0],
                'Name': row[1],
                'Gender': row[2],
                'Joining_Date': str(row[3]),  # Convert timedelta to string
                'Check_Out': str(row[4]),  # Convert timedelta to string
                'Salary': row[5],
                'Bonus%': row[6],
                'Team': row[7],
                'Designation': row[8]    
                
            }
            for row in result
        ]

        return jsonify(data)

    except Exception as e:
        return jsonify({'error': str(e)})

    finally:
        # Close the cursor and connection
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)