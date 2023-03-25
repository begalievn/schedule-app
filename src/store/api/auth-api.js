import { authActions } from '../slice/auth-slice';
import { commonApi } from './common-api';

export const authApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data: credentials } = await queryFulfilled;
          console.log(credentials);

          const loginData = {
            token: credentials.access_token,
          };

          dispatch(authActions.loginAuthorization(loginData));
        } catch (error) {
          //   toast.error(error?.message);
        }
      },
    }),

    registerUser: builder.mutation({
      query: (body) => ({
        url: 'auth/registration',
        method: 'POST',
        body,
      }),

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data: credentials } = await queryFulfilled;

          const registerData = {
            token: credentials.access_token,
            // email: credentials.email,
          };

          dispatch(authActions.loginAuthorization(registerData));
        } catch (error) {
          //   toast.error(error?.message);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
