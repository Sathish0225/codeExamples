from fpdf import FPDF

pdf = FPDF()

# imagelist is the list with all image filenames
imagelist = ["../assets/images/fan.png", "../assets/images/fingerprint.png"]

for image in imagelist:
    pdf.add_page()
    pdf.image(image)

pdf.output("sample.pdf","F")