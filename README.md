# Engi CLI

## Install

```
pipenv install -d
```

### Linguist

```
gem install github-linguist --bindir /usr/local/bin
```

### Build a Docker image on a Mac

Running Docker from within Docker :exploding_head:

```
docker compose build --ssh default
```

## Analyse

```
pipenv run engi analyse engi-network/demo-python
```

### Sample Output

```
[
    {
        "TestId": "test/test_demo.py::test_fail",
        "TestResult": "Failed",
        "TestName": "test_fail",
        "TestMessage": "assert (4 + 4) == 1"
    }
]
```

### Testing

```
pipenv run pytest -s
```

## Submission

### Figma

Assuming the source for [same-story-api](https://github.com/engi-network/same-story-api) is at `../same-story-api`

#### Environment

Currently, the command is using AWS credentials via boto3.

#### Submit a job, receive results

```
pipenv run engi submission execute ../same-story-api/test/data figma engi-network/same-story-storybook --env staging
```

| Argument    | Description |
| ----------- | ----------- |
| `../same-story-api/test/data` | a directory containing the check frame image exported from Figma |
| `figma` | tells the CLI to execute a `same-story-api` job |
| `engi-network/figma-plugin` | the GitHub repo containing the Storybook |

#### Sample output

```
{'results': {'MAE': '0.249906 (3.81332e-06)',
             'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'code_path': 'src/app/components/global/Button/Button.stories.tsx',
             'code_snippet': 'import { action } from '
                             "'@storybook/addon-actions'\n"
                             'import { boolean, select, text } from '
                             "'@storybook/addon-knobs'\n"
                             '\n'
                             "import Button from './Button'\n"
                             '\n',
             'completed_at': 1655220776.369705,
             'component': 'Button',
             'created_at': 1655220645.272907,
             'height': '600',
             'path': 'Global/Components',
             'repository': 'engi-network/figma-plugin',
             'sns_topic_arn': 'arn:aws:sns:us-west-2:163803973373:cc9cd95e-e807-443e-9900-b4f26366a9d2-same-story-test-topic',
             'story': 'Button With Knobs',
             'url_blue_difference': 'https://s3.us-west-2.amazonaws.com/same-story-api-dev/checks/cc9cd95e-e807-443e-9900-b4f26366a9d2/report/blue_difference.png',
             'url_gray_difference': 'https://s3.us-west-2.amazonaws.com/same-story-api-dev/checks/cc9cd95e-e807-443e-9900-b4f26366a9d2/report/gray_difference.png',
             'url_screenshot': 'https://s3.us-west-2.amazonaws.com/same-story-api-dev/checks/cc9cd95e-e807-443e-9900-b4f26366a9d2/report/__screenshots__/Global/Components/Button/Button%20With%20Knobs.png',
             'width': '800'},
 'spec': {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
          'component': 'Button',
          'height': '600',
          'path': 'Global/Components',
          'repository': 'engi-network/figma-plugin',
          'sns_topic_arn': 'arn:aws:sns:us-west-2:163803973373:cc9cd95e-e807-443e-9900-b4f26366a9d2-same-story-test-topic',
          'story': 'Button With Knobs',
          'width': '800'},
 'status': [{'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'job started',
             'step': 0,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'downloaded Figma check frame',
             'step': 1,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'checked out code',
             'step': 2,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'installed packages',
             'step': 3,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'captured screenshots',
             'step': 4,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'completed visual comparisons',
             'step': 5,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'completed numeric comparisons',
             'step': 6,
             'step_count': 8},
            {'check_id': 'cc9cd95e-e807-443e-9900-b4f26366a9d2',
             'message': 'uploaded screenshots',
             'step': 7,
             'step_count': 8}]}
```
