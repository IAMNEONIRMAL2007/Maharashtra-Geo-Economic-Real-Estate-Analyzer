import json
import traceback
import sys

def run_notebook(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        nb = json.load(f)
    
    code_cells = [cell['source'] for cell in nb['cells'] if cell['cell_type'] == 'code']
    
    global_env = {}
    for i, source_lines in enumerate(code_cells):
        code = "".join(source_lines)
        print(f"--- Running Cell {i+1} ---")
        try:
            exec(code, global_env)
            print(f"Cell {i+1} completed successfully.")
        except Exception as e:
            print(f"Error in Cell {i+1}:")
            traceback.print_exc()
            break

if __name__ == '__main__':
    run_notebook('Maharashtra_Geo_Economic_Analyzer.ipynb')
