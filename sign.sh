APKPATH="./platforms/android/app/build/outputs/apk/release"
KEYSTOREPATH="keystore.keystore"

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "$KEYSTOREPATH" "$APKPATH/app-release-unsigned.apk" valleytracker
jarsigner -verbose -verify -certs "$APKPATH/app-release-unsigned.apk"
zipalign -v 4 "$APKPATH/app-release-unsigned.apk" "$APKPATH/app-release-signed.apk"
