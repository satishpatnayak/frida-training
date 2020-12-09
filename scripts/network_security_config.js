if(Java.available)
{
	Java.perform(function () {

    var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');

    TrustManagerImpl.verifyChain.implementation = function (untrustedChain, trustAnchorChain, host, clientAuth, ocspData, tlsSctData) {
		// https://github.com/google/conscrypt/blob/c88f9f55a523f128f0e4dace76a34724bfa1e88c/platform/src/main/java/org/conscrypt/TrustManagerImpl.java#L650 

        console.log(JSON.stringify(untrustedChain));
        return untrustedChain;
    }
});
}
else
{
	console.log("Java not available");
}









