export const normalizeTextStructure = (text: string): string => {
	// 첫 번째 소제목 제거
	const firstSectionSplit = text.indexOf('\r\n\r\n');
	let content = firstSectionSplit !== -1 ? text.slice(firstSectionSplit + 4) : text;

	// 중간 소제목 제거: \r\n\r\n + 짧은 줄 + \r\n\r\n => \r\n\r\n
	const SECTION_HEADER_PATTERN = /\r\n\r\n[^\r\n]{1,17}?\r\n\r\n/g;
	content = content.replace(SECTION_HEADER_PATTERN, '\r\n\r\n');
	// 문단 줄바꿈 제거
	content = content.replace(/\r\n\s+/g, ' ');
	return content.trim();
};
