#!/bin/bash

# Loop through all .png files in the current directory
for file in *.png; do
    # Check if the file exists (in case there are no .png files)
    if [[ -f "$file" ]]; then
        # Extract the base name without the .png extension
        base_name="${file%.png}"
        
        # Convert the .png file to .webp with 50% quality
        convert "$file" -quality 50 "${base_name}.webp"
        
        echo "Converted $file to ${base_name}.webp"
    else
        echo "No .png files found in the current directory."
    fi
done
