
export default function show_action_sheet(itemList: string[], itemColor?: string) {
	return new Promise<string>((resolve) => {
		wx.showActionSheet({
			itemColor,
			itemList,					// 按钮的文字数组，数组长度最大为6个
			success(res) {
				const ret = itemList.find((_v, i) => {
					return i === res.tapIndex;
				});
				resolve(ret);
			},
			fail() {
				resolve('');
			}
		});
	});
}
