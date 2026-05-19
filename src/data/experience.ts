import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    title: '국내 PG사 대리점 운영 앱 신규 개발',
    period: '2025.03 - 2025.04',
    description:
      '대리점의 결제·수수료 조회와 가맹점 등록·관리 업무를 지원하는 앱으로, 관련 화면 및 기능을 Flutter 기반으로 구현했습니다.',
    imageSrc: '/images/experience/pg-app.png',
    imageAlt: '국내 PG사 대리점 운영 앱 대표 이미지',
    recordUrl:
      'https://velog.io/@kimkaaa/series/Flutter-App-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%A1%9D',
    roles: [
      'Flutter 기반 화면 및 기능 개발',
      '서버 API 연동 및 데이터 처리',
      '사용자 입력 및 상태 처리',
      'QA 반영 및 이슈 대응',
    ],
    stacks: [
      'Flutter',
      'Dart',
      'Riverpod',
      'GoRouter',
      'Dio',
    ],
    details: [
      {
        title: 'GoRouter + Riverpod 라우팅과 API 레이어 분리',
        implementation: [
          '초기 화면 이동은 로그인 여부와 권한 상태에 따라 `GoRouter`의 redirect에서 공통으로 처리했습니다.',
          '전역 진입 규칙은 라우터에서 관리하고, 일반 화면 이동은 라우터에 정의한 경로를 사용해 경로 문자열을 직접 작성하지 않도록 했습니다.',
          '네트워크 요청은 `Dio` 설정, 도메인별 API 클래스, API 객체를 제공하는 `provider`로 역할을 나누고, 화면에서는 주입받은 API 객체를 사용했습니다.',
        ],
        result: [
          '공통 진입 규칙은 라우터에서, 데이터 요청 구조는 API 영역에서 처리하도록 했습니다.',
          '화면은 이동과 API 호출만 담당하게 했습니다.',
        ],
      },
      {
        title: 'json_serializable + freezed 기반 API 모델 관리',
        implementation: [
          'API 응답 모델과 요청 모델을 역할에 따라 분리했습니다.',
          '응답 모델은 서버에서 받은 값을 객체로 변환하고, 요청 모델은 서버로 보낼 값을 JSON으로 변환하도록 구성했습니다.',
          '일반 API 모델은 `json_serializable`, 인증 상태처럼 불변 객체로 다루는 값은 `freezed`로 관리했습니다.',
          '중첩 응답 구조는 하위 모델로 나눠 필요한 형태로 분리했습니다.',
        ],
        result: [
          '화면이나 API 호출부에서 JSON 값을 직접 다루지 않고, 모델 단위로 변환해 사용했습니다.',
        ],
      },
      {
        title: '검색 조건 기반 목록 조회와 페이징 처리',
        implementation: [
          '검색 조건과 페이지 번호를 함께 전달해 조건에 맞는 목록을 조회했습니다.',
          '`PagingController`와 `PagedListView`를 사용해 목록 페이징을 구현했습니다.',
          '첫 페이지에서는 전체 건수를 함께 갱신하고, 이후 페이지는 목록만 추가하도록 했습니다.',
          '페이지 정보와 목록 데이터를 함께 받는 응답 형식은 공통 모델로 분리해 재사용했습니다.',
        ],
        result: [
          '무한 스크롤과 당겨서 새로고침을 적용해 목록을 이어서 조회하거나 첫 페이지부터 다시 불러올 수 있게 했습니다.',
          '조회 결과가 없을 때와 요청 실패를 분기해 각각의 안내 및 재시도 UI를 제공했습니다.',
        ],
      },
      {
        title: '파일 업로드와 다운로드 처리',
        implementation: [
          '업로드는 `FormData`와 `MultipartFile`을 사용해 파일과 메타 정보를 함께 전송했습니다.',
          '파일 선택은 `file_picker`를 사용해 처리하고, 업로드 후 반환된 파일 번호를 기준으로 등록 또는 수정 요청이 이어지도록 했습니다.',
          '다운로드는 바이트 응답으로 받은 뒤 `path_provider`로 임시 경로를 구해 저장하고, 이후 `share_plus`를 사용해 공유 기능으로 연결했습니다.',
        ],
        result: [
          '업로드는 `multipart` 요청으로, 다운로드는 바이트 응답 처리로 구현했습니다.',
          '저장과 공유 처리는 유틸 함수로 분리해 재사용할 수 있도록 했습니다.',
        ],
      },
      {
        title: '입력 폼 상태 관리와 유효성 검사 처리',
        implementation: [
          '입력 상태는 `controller`와 `validator`를 연결해 관리하고, 필요한 경우 필드 단위 객체로 묶어 사용했습니다.',
          '유효성 검사 로직과 필드별 안내 문구를 공통화해 재사용할 수 있도록 했습니다.',
          '입력값 변화에 따라 버튼 노출과 에러 스타일을 제어했습니다.',
        ],
        result: [
          '입력 UI를 공통 구조로 정리해, 화면에서 필요한 값만 전달해 사용할 수 있게 했습니다.',
        ],
      },
      {
        title: '공통 테마와 스타일 적용',
        implementation: [
          '앱 전역에서 사용하는 텍스트와 기본 스타일은 `ThemeData`로 적용했습니다.',
          '색상, 간격 같은 스타일 값은 별도 상수로 관리했습니다.',
          '반복해서 사용하는 UI는 공통 위젯으로 분리했습니다.',
          '텍스트는 `Theme.of(context).textTheme`를 기본으로 사용하고, 필요한 경우 `copyWith`로 일부 속성만 조정했습니다.',
        ],
        result: [
          '화면마다 공통 스타일 기준을 유지할 수 있었습니다.',
          '반복되는 스타일과 UI를 공통화해 필요한 구성만 조합해 사용할 수 있도록 했습니다.',
        ],
      },
    ],
  },
];