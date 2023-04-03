import type { Actions } from "./$types";
import { redirect } from '@sveltejs/kit';

// set the theme cookie
export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get("theme");
        const redirectTo = url.searchParams.get("redirectTo");
        
        if (theme) {
            cookies.set("colortheme", theme, { path: "/", maxAge: 60 * 60 * 24 * 365});
        }

        // redirect to the page current page or the home page
        throw redirect(303, redirectTo ?? "/");
    }
}