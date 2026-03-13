# Privacy Policy

Last updated: March 13, 2026

Braver Search is an iOS and macOS app with a Safari extension that redirects supported Safari searches to Brave Search. This Privacy Policy explains what information Braver Search processes, what information is sent off-device, and what is not collected.

## Summary

- Braver Search does not require an account.
- Braver Search does not ask for your name, email address, phone number, mailing address, or payment card information.
- Braver Search does not send your search queries, full URLs, or referrers to us.
- Braver Search uses limited anonymous analytics for aggregate usage counts.
- Optional support purchases are handled by Apple through StoreKit and the App Store, not by Braver Search directly.

## Information Processed On Device

Braver Search processes some information locally on your device so the app and extension can work:

- Whether search redirection is enabled.
- Whether a Safari navigation appears to be a supported search that should be redirected to Brave Search.
- Search terms and URLs only as needed on-device to determine whether to redirect a supported search.
- A locally generated random identifier used for anonymous analytics.
- Local app and extension state, such as whether the app has been opened before.
- Local support and monetization state, such as:
  - whether you are eligible to see optional tip options,
  - whether you have donated,
  - how many donations have been recorded on the device,
  - the last donation product identifier recorded on the device,
  - a local redirect count,
  - a first-use timestamp used for app behavior.

This local data is stored in Apple-provided local storage such as app group `UserDefaults`.

## Information Sent To Us Or Our Service Providers

Braver Search sends a small number of anonymous analytics events to PostHog. These events are:

- `first_app_open`
- `app_opened`
- `redirect_setting_changed`
- `search_redirected`

The analytics payload is limited to:

- a random anonymous identifier (`distinct_id`),
- the event name,
- platform (`ios` or `macos`),
- source (`host_app` or `safari_extension`),
- app version,
- whether redirect was enabled for the setting-change event,
- a coarse surface value such as `ios_app`, `extension_storage`, or `background_redirect`.

Braver Search is configured not to send search query text, full URLs, referrers, account identifiers, email addresses, names, contact lists, photos, files, advertising IDs, or custom person profiles in these analytics events.

## Information Not Collected By Braver Search

Braver Search does not collect or transmit to us:

- the text of your searches,
- the full pages or URLs you browse,
- your Safari browsing history,
- your contacts, photos, files, microphone, camera, or location,
- your payment card or bank information,
- account credentials,
- advertising identifiers.

## Tips, Donations, And Paid Access

Braver Search may offer optional one-time support purchases through Apple's in-app purchase system. As of the latest app changes, optional tip products are intended for users who downloaded Braver Search before the paid-app cutoff.

When you use a support purchase:

- the purchase transaction is processed by Apple through StoreKit and the App Store,
- Apple may collect payment and transaction information under Apple's own privacy policy,
- Braver Search does not receive your full payment card details,
- Braver Search stores limited purchase state locally on your device, such as whether a donation occurred, how many support purchases were recorded, and the last donation product identifier recorded locally.

Braver Search may also use StoreKit transaction data locally to determine whether your app purchase date qualifies you as a grandfathered user or a paid-app customer. That determination is used for app behavior and support UI. Braver Search does not send that status to PostHog as part of the app's current analytics events.

## Third Parties

Braver Search interacts with the following third parties:

- Brave Search, when the extension redirects a supported Safari search to `https://search.brave.com`
- PostHog, for anonymous product analytics
- Apple, for App Store distribution, StoreKit purchases, and review links
- GitHub, if you choose to open the support link from the extension or app

Those third-party services have their own privacy practices and policies.

## Data Retention

Local app and extension data remains on your device until it is removed by the app, cleared by the system, or deleted when you remove the app and extension.

Anonymous analytics data sent to PostHog is retained according to the PostHog project settings used for Braver Search.

Because Braver Search does not maintain user accounts, we may not be able to associate anonymous analytics data with a specific person unless you provide enough information for us to identify the record.

## Your Choices

You can:

- disable search redirection in the app or extension,
- choose not to make any support purchase,
- avoid using the support, review, or external links,
- uninstall the app and disable the Safari extension.

If you do not want anonymous analytics to be sent, the practical way to avoid future analytics from Braver Search is to stop using or uninstall the app and extension.

## Children's Privacy

Braver Search is not directed to children under 13, and we do not knowingly collect personal information from children under 13.

## Changes To This Privacy Policy

We may update this Privacy Policy from time to time. If we do, we will update the "Last updated" date above.

## Contact

If you have questions about this Privacy Policy, you can contact:

- btbishop93@gmail.com
