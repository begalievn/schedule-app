import { commonApi } from './common-api';

export const subjectApi = commonApi.injectEndpoints({
	endpoints: (builder) => ({
		createSubject: builder.mutation({
			query: (body) => ({
				url: 'subject',
				method: 'POST',
				body,
			}),
		}),
		getSubjectsFiltered: builder.query({
			query: ({ semester, course }) => ({
				url: `subject/filtered?semester=${semester}&course=${course}`,
			}),
		}),
		getSubjectById: builder.query({
			query: (_id) => ({
				url: `subject/${_id}`,
			}),
		}),
		updateSubject: builder.mutation({
			query: ({ id, body }) => ({
				url: `subject/${id}`,
				method: 'PATCH',
				body: body,
			})
		}),
		deleteSubject: builder.mutation({
			query: (id) => ({
				url: `subject/${id}`,
				method: 'DELETE',
			})
		})
	}),
});

export const {
	useCreateSubjectMutation,
	useGetSubjectsFilteredQuery,
	useLazyGetSubjectsFilteredQuery,
	useGetSubjectByIdQuery,
	useUpdateSubjectMutation,
	useDeleteSubjectMutation,
} = subjectApi;
