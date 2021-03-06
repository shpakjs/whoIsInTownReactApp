const APP_ID = 'app_id=123';

const apiUrls = {
    getArtist: (artistName: string) => `artists/${artistName}?${APP_ID}`,
    getArtistEvents: (artistName: string) => `artists/${artistName}/events?${APP_ID}`,
};

export default apiUrls;