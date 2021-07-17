import type { Endpoints } from "@octokit/types";
import { shape } from "prop-types";

type Props = {
  commits: Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];
};

export function RepoCommits({ commits }: Props) {
  return (
    <div>
      <table>
        <thead>
          <th>hash</th>
          <th>commit message</th>
        </thead>
        <tbody>
          {commits.map(({ sha, commit, html_url }) => (
            <tr key={sha}>
              <td>
                <a href={html_url} target="_blank">
                  {sha.slice(0, 7)}
                </a>
              </td>
              <td>{commit.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
