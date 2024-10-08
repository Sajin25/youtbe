const videos = [
    {
        title: "Sample Video 1",
        thumbnail: "https://via.placeholder.com/300x180?text=Video+1",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Sample Video 2",
        thumbnail: "https://via.placeholder.com/300x180?text=Video+2",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Sample Video 3",
        thumbnail: "https://via.placeholder.com/300x180?text=Video+3",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
];

const videoList = document.getElementById("video-list");

videos.forEach(video => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");
    videoItem.innerHTML = `
        <a href="${video.url}" target="_blank">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
        </a>
    `;
    videoList.appendChild(videoItem);
});
