import { defineMiddleware } from "astro:middleware";

// Supported languages
const locales = ["en", "es"];
const defaultLocale = "en";

export const onRequest = defineMiddleware((context, next) => {
    const { url, redirect } = context;

    // Only run this logic on the root "/" path
    if (url.pathname === "/") {
        // Get the user's preferred languages from the 'Accept-Language' header
        const acceptLanguage = context.request.headers.get("accept-language");
        console.log("Accept-Language:", acceptLanguage);


        if (acceptLanguage) {
            // Parse the header to find the best match
            // 'es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7' -> 'es'
            const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

            // If the preferred locale is supported and it's not the default one
            if (locales.includes(preferredLocale) && preferredLocale !== defaultLocale) {
                // Redirect to the Spanish version
                // This will redirect from "/" to "/es/"
                return redirect(`/${preferredLocale}/`, 307); // 307 = Temporary Redirect
            }
        }

        // If no preference, or if 'en' is preferred, they stay on '/' (default)
        // The 'prefixDefaultLocale: false' in our config handles this
    }

    // Continue to the requested page
    return next();
});