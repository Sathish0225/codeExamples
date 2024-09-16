import langcodes
from langdetect import detect
text = input("Enter any text in any language:")
language_code = detect(text)
language_name = langcodes.Language(language_code).display_name()

print(f"Detected language: {language_name}")