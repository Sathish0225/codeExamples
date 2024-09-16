from pytube import YouTube

link = input("Enter youtube video url: ")
yt = YouTube(link)
yt.streams.filter(progressive=True, file_extension='mp4').first().download()
print("Downloaded",link)