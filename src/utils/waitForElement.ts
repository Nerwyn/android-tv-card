export async function waitForElement(parent: ParentNode, selector: string) {
	while (!parent.querySelector(selector)) {
		await new Promise((resolve) => requestAnimationFrame(resolve));
	}
	return parent.querySelector(selector);
}
