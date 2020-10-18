export class BaseUrl {
	// static Url = 'https://api.rhythmchoir.com';
	static Url = 'https://api.rhythmchoir.com';
	public static getURL() {
		return this.Url;
	}
}
export class profilePictureURL {
	public static getURL() {
		return `${BaseUrl.getURL()}/api/profilePicture/`;
	}
}
export class newsImageURL {
	public static getURL() {
		return `${BaseUrl.getURL()}/api/newsImage/`;
	}
}
export class youtubeURL {
	public static getURL() {
		return `https://www.youtube.com/embed/`;
	}
}
