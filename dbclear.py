from django.apps import apps
from django.db import connection

def truncate_all_tables():
    with connection.cursor() as cursor:
        # Disable foreign key constraints
        cursor.execute("PRAGMA foreign_keys=OFF;")
        
        # Get all model tables
        for model in apps.get_models():
            table_name = model._meta.db_table
            cursor.execute(f"DELETE FROM {table_name};")
        
        # Reset auto-increment sequences
        cursor.execute("DELETE FROM sqlite_sequence;")
        
        # Enable foreign key constraints
        cursor.execute("PRAGMA foreign_keys=ON;")
