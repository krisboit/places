import { Dimensions } from "react-native"
import WebView from "react-native-webview"

export default function Map() {
    return <WebView
    style={{
        border: "1px solid red",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height
    }}
    source={{uri:"https://places.nu"}}
    injectedJavaScript={`
                (function() {
                    // document.addEventListener('DOMContentLoaded', function() {
                        
                        // window.ReactNativeWebView.postMessage("DOM fully loaded");
                        document.querySelector("nav")?.remove();
                        document.querySelector("#addPlaceIcone")?.remove();
                    // });
                })();
                true;
            `}
            onMessage={(event) => {
                // if (event.nativeEvent.data === "DOM fully loaded") {
                    // console.log(event.nativeEvent.data)
                // }
            }}
  />
}