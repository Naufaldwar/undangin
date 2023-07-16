import "@/styles/globals.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <ColorSchemeProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          // colorScheme: "light",
          colors: {
            blue: [
              "#a2d1d7",
              "#84c1ca",
              "#65b2bd",
              "#46a2b0",
              "#2793a2",
              "#05BFDB",
              "#088395", // The Real Primary Color
              "#0A4D68",
              "#A1590E",
              "#79430B",
            ],
          },
          primaryColor: "blue",
          fontFamily: "Poppins, sans-serif",
          fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
          },
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
                // background: "orange",
              },
            },
            Text: {
              defaultProps: {
                color: "black",
              },
            },
            // Container: {
            //   defaultProps: {
            //     sizes: {
            //       xs: 540,
            //       sm: 720,
            //       md: 1400,
            //     },
            //     background: "red",
            //   },
            // },
            Input: {
              styles: (theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.gray[theme.fn.primaryShade()],
                  },
                  "&::placeholder": {
                    fontSize: theme.fontSizes.sm,
                  },
                },
                error: {
                  borderColor: theme.colors.red[theme.fn.primaryShade()],
                  color: theme.colors.red[theme.fn.primaryShade()],
                },
                invalid: {
                  color: theme.colors.dark[7],
                  borderColor: theme.colors.dark[theme.fn.primaryShade()],
                },
              }),
            },

            TextInput: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
            NumberInput: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
            PasswordInput: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
              styles: (theme) => ({
                input: {
                  "&::placeholder": {
                    fontSize: theme.fontSizes.sm,
                  },
                },
                error: {
                  borderColor: theme.colors.red[theme.fn.primaryShade()],
                  color: theme.colors.red[theme.fn.primaryShade()],
                },
                invalid: {
                  color: theme.colors.dark[7],
                },
              }),
            },
            Select: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
            Textarea: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
            FileInput: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
            Button: {
              defaultProps: {
                radius: "md",
                size: "md",
              },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
