function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.mtka.org*")) {
		return "PROXY apple.com:80";
	}


	return "DIRECT";
}
