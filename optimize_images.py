import os
from PIL import Image

def optimize_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png"):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as im:
                    # Convert to RGB if necessary (e.g. for transparent PNGs if we wanted to drop alpha, but WebP supports alpha)
                    # im = im.convert("RGB") 
                    
                    webp_filename = os.path.splitext(filename)[0] + ".webp"
                    webp_filepath = os.path.join(directory, webp_filename)
                    
                    print(f"Converting {filename} to {webp_filename}...")
                    im.save(webp_filepath, "webp", quality=80)
                    
                    # Optional: Remove original if successful? 
                    # os.remove(filepath) 
            except Exception as e:
                print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    optimize_images("public/images")
