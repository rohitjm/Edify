export const changeCurrentVideo = (value) => {
  return {
    type: 'CHANGE_VIDEO',
    value: value
  };
};

export const fetchVideoList = (videos) => {
  return {
    type: 'FETCH_VIDEOS',
    videos: videos
  };
};