import { View } from 'react-native';
import { 
    BannerAd,
    BannerAdSize,
    TestIds
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

export function AdMobBanner() {
    return (
        <View style={{}}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{ requestNonPersonalizedAdsOnly: true }}
            />
        </View>
    );
}
