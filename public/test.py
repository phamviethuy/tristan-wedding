import os
from PIL import Image

# Folder containing the .jpg images
folder_path = 'D:/Workspace/Study/tristan-wedding/static'

# Resizing factor
resize_factor = 0.2

# Loop through all files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith('.jpg'):
        # Open an image file
        img_path = os.path.join(folder_path, filename)
        img = Image.open(img_path)
        
        # Calculate the new size
        new_size = (int(img.width * resize_factor), int(img.height * resize_factor))
        
        # Resize the image
        img_resized = img.resize(new_size,  Image.Resampling.LANCZOS)
        
        # Save the resized image (you can overwrite the original or save it as a new file)
        img_resized.save(os.path.join(folder_path, f'{filename}'))

        print(f'Resized {filename} to {new_size}')
