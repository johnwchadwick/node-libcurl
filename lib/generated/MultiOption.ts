/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This file was generated by scripts/build-options.js on 2019-05-18T01:22:09.622Z
// Do not edit manually

export interface MultiOption {
  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html)
   */
  readonly CHUNK_LENGTH_PENALTY_SIZE: 'CHUNK_LENGTH_PENALTY_SIZE'

  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html)
   */
  readonly CONTENT_LENGTH_PENALTY_SIZE: 'CONTENT_LENGTH_PENALTY_SIZE'

  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html)
   */
  readonly MAX_HOST_CONNECTIONS: 'MAX_HOST_CONNECTIONS'

  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html)
   */
  readonly MAX_PIPELINE_LENGTH: 'MAX_PIPELINE_LENGTH'

  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html)
   */
  readonly MAX_TOTAL_CONNECTIONS: 'MAX_TOTAL_CONNECTIONS'

  /**
   * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html)
   */
  readonly MAXCONNECTS: 'MAXCONNECTS'
}

export type MultiOptionName =
  | 'CHUNK_LENGTH_PENALTY_SIZE'
  | 'CONTENT_LENGTH_PENALTY_SIZE'
  | 'MAX_HOST_CONNECTIONS'
  | 'MAX_PIPELINE_LENGTH'
  | 'MAX_TOTAL_CONNECTIONS'
  | 'MAXCONNECTS'
