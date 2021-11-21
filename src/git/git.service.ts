import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GitService {
  constructor(private httpServices: HttpService) {}

  async getCommits(user, repo, branch, filter): Promise<any> {
    return await lastValueFrom(
      await this.httpServices.get(
        `https://api.github.com/repos/${user}/${repo}/commits?sha=${branch}&per_page=25`,
      ),
    )
      .then((content) => {
        return content.status === 200
          ? filter
            ? filter === 'message'
              ? content.data.map((item) => item.commit.message)
              : filter === 'date'
              ? content.data.map(
                  (item) => item.commit.committer.date.split('T')[0],
                )
              : content.data
            : content.data
          : {};
      })
      .catch((err) => err.message);
  }
}
