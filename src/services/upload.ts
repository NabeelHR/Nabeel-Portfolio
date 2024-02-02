import { storage } from './storage';

const uploadImg = async (image) => {
	if (image == null) return;
	const imageRef = ref(storage, `images/${image.name}`);
	uploadBytes(imageRef, image).then((snapshot) => {
		getDownloadURL(snapshot.ref).then((url) => {
			setImageUrls((prev) => [...prev, url]);
		});
	});
};
